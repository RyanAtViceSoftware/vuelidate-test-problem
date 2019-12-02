export const expectBySelector = (wrapper, selector) => {
  const result = wrapper.find(selector)

  expect(result.element).toBeTruthy()

  return result
}

export const expectNoneBySelector = (wrapper, selector) => {
  const result = wrapper.find(selector)

  expect(result.element).toBeFalsy()

  return result
}

export const expectByTestId = (wrapper, dataTestId) => {
  return expectBySelector(wrapper, `[data-testid="${dataTestId}"]`)
}

export const expectNoneByTestId = (wrapper, dataTestId) => {
  return expectNoneBySelector(wrapper, `[data-testid="${dataTestId}"]`)
}

export const expectAllBySelector = (wrapper, selector) => {
  const result = wrapper.findAll(selector)

  expect(result.length).toBeTruthy()

  return result
}

export const expectAllByTestId = (wrapper, dataTestId) => {
  return expectAllBySelector(wrapper, `[data-testid="${dataTestId}"]`)
}

export const expectValidForm = formModel => {
  if (formModel.$error) {
    const getPropsThatDontStartWithDollarSigns = obj =>
      Object.keys(obj).filter(key => !key.startsWith('$'))

    const formProperties = getPropsThatDontStartWithDollarSigns(formModel)

    const errors = formProperties
      .filter(prop => formModel[prop].$error)
      .map(prop => {
        const modelProp = formModel[prop]

        const validationErrors = getPropsThatDontStartWithDollarSigns(modelProp)
          .filter(validationProp => modelProp[validationProp] === false)
          .map(validationProp => `${prop}.${validationProp}`)
          .join(`, `)

        return validationErrors
      })

    if (!errors.length) {
      return
    }

    throw new Error(
      `Expected form to be valid but found following validation errors ${errors.join(
        ', '
      )}`
    )
  }
}
