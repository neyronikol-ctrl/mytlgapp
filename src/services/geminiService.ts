export interface GenerationParams {
  symbolName: string
  style: string
  elements: string[]
  symbolSize: number
  glow: number
  lineThickness: number
}

export class GeminiService {
  private apiKey: string = ''
  private baseUrl = 'https://generativelanguage.googleapis.com/v1beta/models'

  async generatePrompt(params: GenerationParams): Promise<string> {
    const prompt = `Create artistic prompt: ${params.symbolName} in ${params.style} style with elements: ${params.elements.join(', ')}`
    return prompt
  }

  async generateImage(prompt: string): Promise<string> {
    if (!this.apiKey) {
      return 'data:image/svg+xml,<svg></svg>'
    }
    return ''
  }
}

export const geminiService = new GeminiService()
