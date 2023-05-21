from typing import Any
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import Profile
from django import forms

class ProfileCreation(UserCreationForm):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'email', 'password1', 'password2']
    def __init__(self, *args: Any, **kwargs: Any) -> None:
        super().__init__(*args, **kwargs)
        self.fields['first_name'].widget.attrs.update({'placeholder': ('First Name')})
        self.fields['last_name'].widget.attrs.update({'placeholder': ('Last Name')})
        self.fields['username'].widget.attrs.update({'placeholder': ('Username')})
        self.fields['email'].widget.attrs.update({'placeholder': ('Email')})
        self.fields['password1'].widget.attrs.update({'placeholder': ('Password')})
        self.fields['password2'].widget.attrs.update({'placeholder': ('Retype Password')})