import pytest
import os
from appium import webdriver

AWS = 'aws'
LOCAL = 'local'


def get_desired_capabilities(location=AWS):
    if location == LOCAL:
        return {
            'app': os.path.expanduser(
                './android/app/build/outputs/apk/app-debug.apk'),
            'platformName': 'Android',
            'deviceName': 'Android Emulator'
        }
    else:
        return {}


@pytest.fixture(scope="function")
def driver():
    driver = webdriver.Remote(
        command_executor='http://127.0.0.1:4723/wd/hub',
        desired_capabilities=get_desired_capabilities(
            location=os.environ.get('LOCATION')
        )
    )

    yield driver  # Test code runs after this line

    # Teardown
    driver.quit()
