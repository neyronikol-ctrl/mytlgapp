export interface TelegramUser {
  id: number
  first_name: string
  last_name?: string
  username?: string
  language_code?: string
}

export class TelegramService {
  private webApp = window.Telegram?.WebApp

  init() {
    if (!this.webApp) return
    this.webApp.ready()
    this.webApp.expand()
    this.setupBackButton()
  }

  getUser(): TelegramUser | null {
    return this.webApp?.initDataUnsafe?.user || null
  }

  setMainButtonCallback(callback: () => void) {
    if (!this.webApp) return
    this.webApp.MainButton.onClick(callback)
  }

  showMainButton(text: string = 'Synthesize') {
    if (!this.webApp) return
    this.webApp.MainButton.setText(text)
    this.webApp.MainButton.show()
  }

  hideMainButton() {
    if (!this.webApp) return
    this.webApp.MainButton.hide()
  }

  setupBackButton() {
    if (!this.webApp?.BackButton) return
    this.webApp.BackButton.hide()
  }

  shareCard(text: string) {
    if (!this.webApp) return
    this.webApp.switchInlineQuery(text, 'current_chat')
  }

  close() {
    if (!this.webApp) return
    this.webApp.close()
  }
}

export const telegramService = new TelegramService()
