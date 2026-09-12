import { AfterViewChecked, Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Seo } from '../../core/services/seo';

interface ChatMessage {
  role: 'user' | 'assistant';
  text: string;
  sources?: { label: string; path: string }[];
}

@Component({
  selector: 'app-ai-advisor',
  imports: [FormsModule, RouterLink],
  templateUrl: './ai-advisor.html',
  styleUrl: './ai-advisor.scss',
})
export class AiAdvisor implements OnInit, AfterViewChecked {
  @ViewChild('scrollAnchor') scrollAnchor?: ElementRef<HTMLDivElement>;

  protected readonly suggestedPrompts = [
    { icon: '💰', label: 'Construction Cost', prompt: 'How much does it cost to build a 1500 sqft house in Delhi?' },
    { icon: '🧱', label: 'Material Recommendations', prompt: 'Which cement brand is best for a 2-storey home?' },
    { icon: '📅', label: 'Timeline Estimation', prompt: 'How long will it take to build a 2000 sqft duplex?' },
    { icon: '📋', label: 'Building Approvals', prompt: 'What approvals do I need before construction in Gurgaon?' },
  ];

  protected readonly messages = signal<ChatMessage[]>([]);
  protected readonly inputText = signal('');
  protected readonly isTyping = signal(false);
  protected readonly showSoftCta = signal(false);

  constructor(private readonly seo: Seo) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'AI Construction Advisor — Instant Answers to Your Building Questions',
      description:
        'Chat with our AI Construction Advisor for instant, cited answers on construction cost, material recommendations, project timelines, and building approvals.',
      url: '/ai-advisor',
    });
  }

  ngAfterViewChecked(): void {
    this.scrollAnchor?.nativeElement.scrollIntoView?.({ behavior: 'smooth' });
  }

  sendPrompt(text: string): void {
    const trimmed = text.trim();
    if (!trimmed || this.isTyping()) return;

    this.messages.update((m) => [...m, { role: 'user', text: trimmed }]);
    this.inputText.set('');
    this.isTyping.set(true);

    // Simulated AI response — replace with a real LLM/RAG backend integration.
    setTimeout(() => {
      const response = this.mockResponse(trimmed);
      this.messages.update((m) => [...m, response]);
      this.isTyping.set(false);

      if (this.messages().length >= 4) {
        this.showSoftCta.set(true);
      }
    }, 900);
  }

  onSubmit(): void {
    this.sendPrompt(this.inputText());
  }

  private mockResponse(prompt: string): ChatMessage {
    const lower = prompt.toLowerCase();

    if (lower.includes('cost') || lower.includes('much')) {
      return {
        role: 'assistant',
        text: 'Based on current rates, a 1,500 sqft house in Delhi costs between ₹22,50,000 (Basic) and ₹33,75,000 (Premium), averaging ₹27,75,000 for a Standard-package build. This includes structure, finishing, electrical/plumbing, and fittings — excluding land and interiors.',
        sources: [
          { label: 'Construction Cost in Delhi', path: '/construction-cost-in/delhi' },
          { label: 'Cost Calculator', path: '/cost-calculator' },
        ],
      };
    }
    if (lower.includes('material') || lower.includes('cement') || lower.includes('brand')) {
      return {
        role: 'assistant',
        text: 'For a 2-storey home, we recommend OPC 53-grade cement for structural RCC work and PPC cement for plastering/masonry — it offers better workability and lower heat of hydration. Steel should be Fe-500D TMT bars from a certified supplier.',
        sources: [{ label: 'Material Prices', path: '/faq' }],
      };
    }
    if (lower.includes('timeline') || lower.includes('long') || lower.includes('duplex')) {
      return {
        role: 'assistant',
        text: 'A 2,000 sqft duplex typically takes 9–12 months: 2 months for foundation, 4–5 months for structure, and 3–5 months for finishing — depending on monsoon delays and approval timelines.',
        sources: [{ label: 'Construction Journey', path: '/' }],
      };
    }
    if (lower.includes('approval') || lower.includes('gurgaon') || lower.includes('permit')) {
      return {
        role: 'assistant',
        text: 'Before construction in Gurgaon, you need: a sanctioned building plan from DTCP/HSVP, a structural stability certificate, and a No-Objection Certificate for water/sewer connection. Approval typically takes 4–8 weeks.',
        sources: [{ label: 'Construction Cost in Gurgaon', path: '/construction-cost-in/gurgaon' }],
      };
    }
    return {
      role: 'assistant',
      text: "I can help with construction cost estimates, material recommendations, project timelines, and approval guidance. Could you share your city and approximate built-up area so I can give you a more precise answer?",
    };
  }
}
