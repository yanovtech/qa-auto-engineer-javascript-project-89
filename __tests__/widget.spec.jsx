import '@testing-library/jest-dom'
import { screen, fireEvent } from '@testing-library/react'
import { test, describe, beforeEach, vi } from 'vitest'
import WidgetPage from './pages/widget-page.js'
import steps from '../__fixtures__/steps.js'
import errorSteps from '../__fixtures__/error-steps.js'
import textSet from '../__fixtures__/text-set.js'
import { expect } from 'vitest'

describe('Widget positive', () => {
  beforeEach(() => {
    WidgetPage.renderWidget(steps)
    window.HTMLElement.prototype.scrollIntoView = vi.fn()
  })

  test('Check Open Widget button displaying', () => {
    WidgetPage.expectOpenWidgetButton()
  })

  test('Check Open Widget button and correct displaying of Chat Bot widget', async () => {
    await WidgetPage.clickOpenWidgetButton()
    WidgetPage.expectModalTitle()
    expect(textSet.openChatText).toBeInTheDocument()
    WidgetPage.expectStartConversationButton()
    WidgetPage.expectCloseButton()
  })

  test('Check Start Conversation button and correct displaying of opened by it menu of the Chat Bot', async () => {
    await WidgetPage.clickOpenWidgetButton()
    await WidgetPage.clickStartConversationButton()
    expect(textSet.startConversationText).toBeInTheDocument()
    WidgetPage.expectChangeProfessionButton()
    WidgetPage.expectTryITButton()
    WidgetPage.expectDeveloperButton()
  })

  test('Check Change Profession button and same section', async () => {
    await WidgetPage.clickOpenWidgetButton()
    await WidgetPage.clickStartConversationButton()
    await WidgetPage.clickChangeProfessionButton()
    expect(textSet.changeProfessionText).toBeInTheDocument()
    WidgetPage.expectTellMoreButton()
    WidgetPage.expectSimplerButton()
    WidgetPage.expectBackButton()
  })

  test('Check Try IT button and same section', async () => {
    await WidgetPage.clickOpenWidgetButton()
    await WidgetPage.clickStartConversationButton()
    await WidgetPage.clickTryITButton()
    expect(textSet.tryITText).toBeInTheDocument()
    WidgetPage.expectInterestingButton()
    WidgetPage.expectAboutChangeOfProfessionButton()
    WidgetPage.expectPreviousStageButton()
  })

  test('Check Developer button and same section', async () => {
    await WidgetPage.clickOpenChatButton()
    await WidgetPage.clickStartConversationButton()
    await WidgetPage.clickDeveloperButton()
    expect(textSet.developerText1).toBeInTheDocument()
    expect(textSet.developerText2).toBeInTheDocument()
    WidgetPage.expectTellDetailsButton()
    WidgetPage.expectReturnToBeginningButton()
  })

  test('Check Tell More button in Change Profession section and section of that button)', async () => {
    await WidgetPage.clickOpenWidgetButton()
    await WidgetPage.clickStartConversationButton()
    await WidgetPage.clickChangeProfessionButton()
    await WidgetPage.clickTellMoreButton()
    expect(textSet.tellMoreText1).toBeInTheDocument()
    expect(textSet.tellMoreText2).toBeInTheDocument()
    WidgetPage.expectStayHereButton()
    WidgetPage.expectBackButton()
  })

  test('Check Simpler button in Change Profession section and section of that button', async () => {
    await WidgetPage.clickOpenWidgetButton()
    await WidgetPage.clickStartConversationButton()
    await WidgetPage.clickChangeProfessionButton()
    await WidgetPage.clickSimplerButton()
    expect(textSet.simplerText).toBeInTheDocument()
    WidgetPage.expectInterestingButton()
    WidgetPage.expectAboutChangeOfProfessionButton()
    WidgetPage.expectPreviousStageButton()
  })

  test('Check Back button and correct display of the chat menu in that user is moved', async () => {
    await WidgetPage.clickOpenWidgetButton()
    await WidgetPage.clickStartConversationButton()
    await WidgetPage.clickChangeProfessionButton()
    await WidgetPage.clickBackButton()
    WidgetPage.expectChangeProfessionButton()
    WidgetPage.expectTryITButton()
    WidgetPage.expectDeveloperButton()
  })

  test('Check Stay Here button and same section', async () => {
    await WidgetPage.clickOpenWidgetButton()
    await WidgetPage.clickStartConversationButton()
    await WidgetPage.clickChangeProfessionButton()
    await WidgetPage.clickTellMoreButton()
    await WidgetPage.clickStayHereButton()
    expect(textSet.stayHereText1).toBeInTheDocument()
    expect(textSet.stayHereText2).toBeInTheDocument()
    WidgetPage.expectStayHereButton()
    WidgetPage.expectReturnToBeginningButton()
  })

  test('Check Interesting button and same section', async () => {
    await WidgetPage.clickOpenWidgetButton()
    await WidgetPage.clickStartConversationButton()
    await WidgetPage.clickTryITButton()
    await WidgetPage.clickInterestingButton()
    expect(textSet.interestingText1).toBeInTheDocument()
    expect(textSet.interestingText2).toBeInTheDocument()
    WidgetPage.expectStayHereButton()
    WidgetPage.expectBackButton()
  })

  test('Check About Change Of Profession button and same section', async () => {
    await WidgetPage.clickOpenWidgetButton()
    await WidgetPage.clickStartConversationButton()
    await WidgetPage.clickTryITButton()
    await WidgetPage.clickAboutChangeOfProfessionButton()
    expect(textSet.aboutChangeOfProfessionText).toBeInTheDocument()
    WidgetPage.expectTellMoreButton()
    WidgetPage.expectSimplerButton()
    WidgetPage.expectBackButton()
  })

  test('Check Previous Stage Button and section user is moved after click on declared button', async () => {
    await WidgetPage.clickOpenWidgetButton()
    await WidgetPage.clickStartConversationButton()
    await WidgetPage.clickTryITButton()
    await WidgetPage.clickPreviousStageButton()
    WidgetPage.expectChangeProfessionButton()
    WidgetPage.expectTryITButton()
    WidgetPage.expectDeveloperButton()
  })

  test('Check button with Tell More Title and result in Developer section', async () => {
    await WidgetPage.clickOpenWidgetButton()
    await WidgetPage.clickStartConversationButton()
    await WidgetPage.clickDeveloperButton()
    await WidgetPage.clickTellDetailsButton()
    WidgetPage.expectStartConversationButton()
  })

  test('Check Return To Beginning button and result in Developer section', async () => {
    await WidgetPage.clickOpenWidgetButton()
    await WidgetPage.clickStartConversationButton()
    await WidgetPage.clickDeveloperButton()
    await WidgetPage.clickReturnToBeginningButton()
    WidgetPage.expectChangeProfessionButton()
    WidgetPage.expectTryITButton()
    WidgetPage.expectDeveloperButton()
  })

  test('Check close button of the widget', async () => {
    await WidgetPage.clickOpenWidgetButton()
    await WidgetPage.clickCloseButton()
    await WidgetPage.waitForModalToClose()
    WidgetPage.expectOpenWidgetButton()
  })
})

describe('Widget negative', () => {
  test('Check wrong interaction with the interface', async () => {
    WidgetPage.renderWidget(errorSteps)
    window.HTMLElement.prototype.scrollIntoView = vi.fn()
    await WidgetPage.clickOpenWidgetButton()
    await WidgetPage.clickStartConversationButton()
    await WidgetPage.clickTryITButton()
    await fireEvent.click(screen.getByRole('button', { name: '' }))
    await WidgetPage.clickChangeProfessionButton()
    await WidgetPage.clickCloseButton()
    await WidgetPage.waitForModalToClose()
    WidgetPage.checkOpenWidgetButton()
  })
})
