import { expect } from 'vitest'
import { screen, render, fireEvent } from '@testing-library/react'
import getWidget from '@hexlet/chatbot-v2'
import { openWidgetButtonText, startConversationButtonText, changeProfessionButtonText, tryITButtonText, developerButtonText, tellMoreButtonText, simplerButtonText, backButtonText, interestingButtonText, aboutChangeOfProfessionButtonText, previousStageButtonText, tellDetailsButtonText, returnToBeginningButtonText, stayHereButtonText, headToBeginningButtonText, closeButtonLabel } from '../utils/constants'
import steps from '../../__fixtures__/steps.js'

class WidgetPage {
  static renderWidget(steps) {
    render(getWidget(steps))
  }

  static get openWidgetButton() {
    return screen.getByText(openWidgetButtonText)
  }

  static clickOpenWidgetButton() {
    fireEvent.click(this.openWidgetButton)
  }

  static get startConversationButton() {
    return screen.getByText(startConversationButtonText)
  }

  static clickStartConversationButton() {
    fireEvent.click(this.startConversationButton)
  }

  static get changeProfessionButton() {
    return screen.getByText(changeProfessionButtonText)
  }

  static clickChangeProfessionButton() {
    fireEvent.click(this.changeProfessionButton)
  }

  static get tryITButton() {
    return screen.getByText(tryITButtonText)
  }

  static clickTryITButton() {
    fireEvent.click(this.tryITButton)
  }

  static get developerButton() {
    return screen.getByText(developerButtonText)
  }

  static clickDeveloperButton() {
    fireEvent.click(this.developerButton)
  }

  static get tellMoreButton() {
    return screen.getByText(tellMoreButtonText)
  }

  static clickTellMoreButton() {
    fireEvent.click(this.tellMoreButton)
  }

  static get simplerButton() {
    return screen.getByText(simplerButtonText)
  }

  static clickSimplerButton() {
    fireEvent.click(this.simplerButton)
  }

  static get backButton() {
    return screen.getByText(backButtonText)
  }

  static clickBackButton() {
    fireEvent.click(this.backButton)
  }

  static get interestingButton() {
    return screen.getByText(interestingButtonText)
  }

  static clickInterestingButton() {
    fireEvent.click(this.interestingButton)
  }

  static get aboutChangeOfProfessionButton() {
    return screen.getByText(aboutChangeOfProfessionButtonText)
  }

  static clickAboutChangeOfProfessionButton() {
    fireEvent.click(this.aboutChangeOfProfessionButton)
  }

  static get previousStageButton() {
    return screen.getByText(previousStageButtonText)
  }

  static clickPreviousStageButton() {
    fireEvent.click(this.previousStageButton)
  }

  static get tellDetailsButton() {
    return screen.getByText(tellDetailsButtonText)
  }

  static clickTellDetailsButton() {
    fireEvent.click(this.tellDetailsButton)
  }

  static get returnToBeginningButton() {
    return screen.getByText(returnToBeginningButtonText)
  }

  static clickReturnToBeginningButton() {
    fireEvent.click(this.returnToBeginningButton)
  }

  static get stayHereButton() {
    return screen.getByText(stayHereButtonText)
  }

  static clickStayHereButton() {
    fireEvent.click(this.stayHereButton)
  }

  static get headToBeginningButton() {
    return screen.getByText(headToBeginningButtonText)
  }

  static clickHeadToBeginningButton() {
    fireEvent.click(this.headToBeginningButton)
  }

  static closeWidget() {
    const closeButton =
    screen.getByRole('button', {
      name: closeButtonLabel,
    })
    fireEvent.click(closeButton)
  }

  static expectStartConversationButton() {
    expect(this.startConversationButtton).toBeInTheDocument()
  }

  static expectModalTitle() {
    expect(screen.getByText(modalTitleText)).toBeInTheDocument()
  }

  static waitForModalToClose() {
    return waitFor(() => {
      expect(screen.queryByText(modalTitleText)).not.toBeInTheDocument()
    })
  }
}

export default WidgetPage
