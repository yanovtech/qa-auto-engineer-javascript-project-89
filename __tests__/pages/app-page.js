import { expect } from 'vitest'
import { screen, render, fireEvent, waitFor } from '@testing-library/react'
import App from '../../src/App'
import { openWidgetButtonText, registrationButtonText, formLabels, modalTitleText, closeButtonLabel } from '../utils/constants'

class AppPage {
  static renderApp() {
    render(<App />)
  }

  static get openWidgetButton() {
    return screen.getByText(openWidgetButtonText)
  }

  static clickOpenWidgetButton() {
    fireEvent.click(this.openWidgetButton)
  }

  static get registrationButton() {
    return screen.getByText(registrationButtonText)
  }

  static clickRegistrationButton() {
    fireEvent.click(this.registrationButton)
  }

  static closeWidget() {
    const closeButton
    = screen.getByRole('button', {
      name: closeButtonLabel,
    })
    fireEvent.click(closeButton)
  }

  static waitForModalToClose() {
    return waitFor(() => {
      expect(screen.queryByText(modalTitleText)).not.toBeInTheDocument()
    })
  }

  static expectModalTitle() {
    expect(screen.getByText(modalTitleText)).toBeInTheDocument()
  }

  static getFormInputLabel(label) {
    return screen.getByLabelText(formLabels[label])
  }

  static fillOutForm() {
    fireEvent.change(this.getFormInputLabel('email'), {
      target: {
        value: 'test@example.com',
      },
    })
    fireEvent.change(this.getFormInputLabel('password'), {
      target: {
        value: 'testpassword',
      },
    })
    fireEvent.change(this.getFormInputLabel('address'), {
      target: {
        value: 'Тестовый адрес, тестовый номер',
      },
    })
    fireEvent.change(this.getFormInputLabel('city'), {
      target: {
        value: 'Москва',
      },
    })
    fireEvent.change(this.getFormInputLabel('country'), {
      target: {
        value: 'Россия',
      },
    })
    fireEvent.click(this.getFormInputLabel('rules'))
  }

  static expectFormValues() {
    expect(this.getFormInputLabel('email').value).toBe('test@example.com')
    expect(this.getFormInputLabel('password').value).toBe('testpassword')
    expect(this.getFormInputLabel('address').value).toBe('Тестовый адрес, тестовый номер')
    expect(this.getFormInputLabel('city').value).toBe('Москва')
    expect(this.getFormInputLabel('country').value).toBe('Россия')
    expect(this.getFotmInputLabel('rules').checked).toBe(true)
  }

  static expectFormSubmission() {
    return waitFor(async () => {
      const resultTable = screen.getByRole('table')
      expect(resultTable).toBeInTheDocument()
      expect(await screen.findByText('Email').nextSibling).toHaveTextContent('test@example.com')
      expect(await screen.findByText('Password').nextSibling).toHaveTextContent('testpassword')
      expect(await screen.findByText('Address').nextSibling).toHaveTextContent('Тестовый адрес, тестовый номер')
      expect(await screen.findByText('City').nextSibling).toHaveTextContent('Москва')
      expect(await screen.findByText('Country').nextSibling).toHaveTextContent('Россия')
      expect(await screen.findByText('Rules').nextSibling).toHaveTextContent('true')
    })
  }
}

export default AppPage
