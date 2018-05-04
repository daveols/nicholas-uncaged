def test_basic(driver):
    WAIT_SEC = 10
    driver.implicitly_wait(WAIT_SEC)

    elem = driver.find_element_by_accessibility_id('testview')

    assert elem is not None


def test_button(driver):
    WAIT_SEC = 10
    driver.implicitly_wait(WAIT_SEC)

    quote = driver.find_element_by_accessibility_id('quote')
    btn = driver.find_element_by_accessibility_id('button')
    btn.click()
    assert quote != driver.find_element_by_accessibility_id('quote')
    quote = driver.find_element_by_accessibility_id('quote')
    btn.click()
    assert quote != driver.find_element_by_accessibility_id('quote')
    btn.click()