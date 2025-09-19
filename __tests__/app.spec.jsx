import '@testing-library/jest-dom'
import { test, beforeEach } from 'vitest'
import AppPage from './pages/app-page.js'
import WidgetPage from './pages/widget-page.js'

beforeEach(() => {
  AppPage.renderApp()
})

test('Check if form renders correctly', () => {
  AppPage.checkRegisterButton()
})

test('Check process of filling of the form with the data', async () => {
  await AppPage.fillOutForm()
  AppPage.expectFormValues()
  await AppPage.clickRegistrationButton()
  AppPage.expectFormSubmission()
  await AppPage.clickBackButton()
  AppPage.checkRegisterButton()
})

test('Check chat functions', async () => {
  await WidgetPage.clickOpenWidgetButton()
  await WidgetPage.clickStartConversationButton()
  WidgetPage.checkStartConversationText()
  WidgetPage.checkChangeProfessionButton()
  WidgetPage.checkTryITButton()
  WidgetPage.checkDeveloperButton()
  await WidgetPage.clickCloseButton()
  await WidgetPage.waitForModalToClose()
  WidgetPage.checkOpenWidgetButton()
})
