import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { test, describe, beforeEach, vi } from 'vitest'
import { WidgetPage } from './pages/widget-page.js'
import steps from '../__fixtures__/steps.js'

describe('Widget positive', () => {
  beforeEach(() => {
    WidgetPage.render(steps)
    window.HTMLElement.prototype.scrollIntoView = vi.fn()
  })

  test('Check correct page displaying', () => {
    WidgetPage.checkOpenChatButton()
  })

  test('Check open chat button', async () => {
    const user = userEvent.setup()
    await WidgetPage.clickOpenChatButton(user)
    WidgetPage.checkTextOpenChat()
    WidgetPage.checkStartConversationButton()
  })

  test('Check starting the conversation', async () => {
    const user = userEvent.setup()
    await WidgetPage.clickOpenChatButton(user)
    await WidgetPage.clickStartConversationButton(user)
    WidgetPage.checkTextStartConversation()
    WidgetPage.checkChangeProfessionButton()
    WidgetPage.checkTryITButton()
    WidgetPage.checkDeveloperButton()
  })

  test('Check сhange profession or find employment section', async () => {
    const user = userEvent.setup()
    await WidgetPage.clickOpenChatButton(user)
    await WidgetPage.clickStartConversationButton(user)
    await WidgetPage.clickChangeProfessionButton(user)
    WidgetPage.checkTextChangeProfession()
    WidgetPage.checkTellMoreButton()
    WidgetPage.checkSimplerButton()
    WidgetPage.checkBackButton()
  })

  test('Check try yourself in IT section', async () => {
    const user = userEvent.setup()
    await WidgetPage.clickOpenChatButton(user)
    await WidgetPage.clickStartConversationButton(user)
    await WidgetPage.clickTryITButton(user)
    WidgetPage.checkTextTryIT()
    WidgetPage.checkInterestingButton()
    WidgetPage.checkChangingProfessionsButton()
    WidgetPage.checkGoBackButton()
  })

  test('Check I am a developer, I want to deepen my knowledge section', async () => {
    const user = userEvent.setup()
    await WidgetPage.clickOpenChatButton(user)
    await WidgetPage.clickStartConversationButton(user)
    await WidgetPage.clickDeveloperButton(user)
    WidgetPage.checkTextDeveloperText1()
    WidgetPage.checkTextDeveloperText2()
    WidgetPage.checkTellMoreButton()
    WidgetPage.checkTakeMeBackButton()
  })

  test('Check tell me more section', async () => {
    const user = userEvent.setup()
    await WidgetPage.clickOpenChatButton(user)
    await WidgetPage.clickStartConversationButton(user)
    await WidgetPage.clickChangeProfessionButton(user)
    await WidgetPage.clickTellMoreButton(user)
    WidgetPage.checkTextTellMoreText1()
    WidgetPage.checkTextTellMoreText2()
    WidgetPage.checkStayHereButton()
    WidgetPage.checkBackButton()
  })

  test('Check something simpler section', async () => {
    const user = userEvent.setup()
    await WidgetPage.clickOpenChatButton(user)
    await WidgetPage.clickStartConversationButton(user)
    await WidgetPage.clickChangeProfessionButton(user)
    await WidgetPage.clickSimplerButton(user)
    WidgetPage.checkTextSimpler()
    WidgetPage.checkInterestingButton()
    WidgetPage.checkChangingProfessionsButton()
    WidgetPage.checkGoBackButton()
  })

  test('Check return to top function', async () => {
    const user = userEvent.setup()
    await WidgetPage.clickOpenChatButton(user)
    await WidgetPage.clickStartConversationButton(user)
    await WidgetPage.clickChangeProfessionButton(user)
    await WidgetPage.clickBackButton(user)
    WidgetPage.checkChangeProfessionButton()
    WidgetPage.checkTryITButton()
    WidgetPage.checkDeveloperButton()
  })

  test('Check stay here and sign up for the course section', async () => {
    const user = userEvent.setup()
    await WidgetPage.clickOpenChatButton(user)
    await WidgetPage.clickStartConversationButton(user)
    await WidgetPage.clickChangeProfessionButton(user)
    await WidgetPage.clickTellMoreButton(user)
    await WidgetPage.clickStayHereButton(user)
    WidgetPage.checkTextStayHereText1()
    WidgetPage.checkTextStayHereText2()
    WidgetPage.checkStayHereButton()
    WidgetPage.checkTakeMeBackButton()
  })

  test('Check interesting section', async () => {
    const user = userEvent.setup()
    await WidgetPage.clickOpenChatButton(user)
    await WidgetPage.clickStartConversationButton(user)
    await WidgetPage.clickTryITButton(user)
    await WidgetPage.clickInterestingButton(user)
    WidgetPage.checkTextInterstingText1()
    WidgetPage.checkTextInterstingText2()
    WidgetPage.checkStayHereButton()
    WidgetPage.checkBackButton()
  })

  test('Check what about changing professions section', async () => {
    const user = userEvent.setup()
    await WidgetPage.clickOpenChatButton(user)
    await WidgetPage.clickStartConversationButton(user)
    await WidgetPage.clickTryITButton(user)
    await WidgetPage.clickChangingProfessionsButton(user)
    WidgetPage.checkChangingProfessionsText()
    WidgetPage.checkTellMoreButton()
    WidgetPage.checkSimplerButton()
    WidgetPage.checkBackButton()
  })

  test('Сheck go back button', async () => {
    const user = userEvent.setup()
    await WidgetPage.clickOpenChatButton(user)
    await WidgetPage.clickStartConversationButton(user)
    await WidgetPage.clickTryITButton(user)
    await WidgetPage.clickGoBackButton(user)
    WidgetPage.checkChangeProfessionButton()
    WidgetPage.checkTryITButton()
    WidgetPage.checkDeveloperButton()
  })

  test('Сheck tell me more button in I am a developer, I want to deepen my knowledge section', async () => {
    const user = userEvent.setup()
    await WidgetPage.clickOpenChatButton(user)
    await WidgetPage.clickStartConversationButton(user)
    await WidgetPage.clickDeveloperButton(user)
    await WidgetPage.clickTellMoreButton(user)
    WidgetPage.checkStartConversationButton()
  })

  test('Сheck go back button in I am a developer, I want to deepen my knowledge section', async () => {
    const user = userEvent.setup()
    await WidgetPage.clickOpenChatButton(user)
    await WidgetPage.clickStartConversationButton(user)
    await WidgetPage.clickDeveloperButton(user)
    await WidgetPage.clickTakeMeBackButton(user)
    WidgetPage.checkChangeProfessionButton()
    WidgetPage.checkTryITButton()
    WidgetPage.checkDeveloperButton()
  })

  test('Check close button', async () => {
    const user = userEvent.setup()
    await WidgetPage.clickOpenChatButton(user)
    await WidgetPage.clickCloseButton(user)
    WidgetPage.checkOpenChatButton()
  })
})
