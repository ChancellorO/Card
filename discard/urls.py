from django.shortcuts import render, redirect
from django.contrib import admin
from django.urls import path, include
from app import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', views.login_page)
]
