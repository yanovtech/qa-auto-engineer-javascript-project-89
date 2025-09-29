import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import { test, describe, beforeEach, vi, expect } from 'vitest'
import AppPage from './pages/app-page.jsx'
import WidgetPage from './pages/widget-page.jsx'
import textSet from '../__fixtures__/text-set.jsx'
import steps from '../__fixtures__/steps.js'

describe('App main section testing', () => {
  beforeEach(() => {
    AppPage.renderApp()
  })

  test('Check the right render of the form and the existance of the button that executes the process of registartion, the submission of the form', () => {
    AppPage.expectRegistrationButton()
  })

  test('Check the process of filling of the form with the data, the process of form submission and the process of return to main screen after form submission', async () => {
    await AppPage.fillOutForm()
    AppPage.expectFormValues()
    await AppPage.clickRegistrationButton()
    AppPage.expectFormSubmission()
    await AppPage.clickBackButton()
    AppPage.expectRegistrationButton()
  })
})

describe('Testing of the widget section of the application', () => {
  test('Check the functions of the chat', async () => {
    WidgetPage.renderWidget(steps)
    window.HTMLDivElement.prototype.scrollIntoView = vi.fn()
    await WidgetPage.clickOpenWidgetButton()
    await WidgetPage.clickStartConversationButton()
    expect(screen.getByText(textSet.startConversationText)).toBeInTheDocument()
    WidgetPage.expectChangeProfessionButton()
    WidgetPage.expectTryITButton()
    WidgetPage.expectDeveloperButton()
    await WidgetPage.closeWidget()
    await WidgetPage.waitForModalToClose()
    WidgetPage.expectOpenWidgetButton()
  })
})
