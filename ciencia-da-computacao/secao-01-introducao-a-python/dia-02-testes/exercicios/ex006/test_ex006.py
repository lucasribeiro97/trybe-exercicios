from ex006 import validate_email
import pytest


# --USERNAME TESTS--


def test_username_can_only_contain_letters():
    assert validate_email("aaaa@nomewebsite.ext") is None


def test_username_can_contain_letters_and_digits():
    assert validate_email("aaaa123@nomewebsite.ext") is None


def test_username_can_contain_letters_digits_and_dashes():
    assert validate_email("aaaa-123@nomewebsite.ext") is None


def test_username_can_contain_letters_digits_dashes_and_underscores():
    assert validate_email("aaaa-123_asa@nomewebsite.ext") is None


def test_username_should_starts_with_letter():
    assert validate_email("l@nomewebsite.ext") is None


def test_username_when_dont_start_with_letter_raise_exeception():
    with pytest.raises(ValueError):
        validate_email("1@nomewebsite.ext")


def test_username_is_invalid_raise_exeception():
    with pytest.raises(ValueError):
        validate_email("a%a@nomewebsite.ext")


# --- WEBSITE TEST ---


def test_website_contain_only_letters_and_digits():
    assert validate_email("aaaa@nomewebsite123.ext") is None


def test_website_invalid_chars_raise_exception():
    with pytest.raises(ValueError):
        validate_email("aaaa@nomewebsite!123.ext")


# --- EXTENSION TEST ---


def test_extension_contain_only_three_chars():
    assert validate_email("abc@website123.com") is None


def test_extension_invalid_chars_raise_exception():
    with pytest.raises(ValueError):
        validate_email("aaaa@nomewebsite.extension")
