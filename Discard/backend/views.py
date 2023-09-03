from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer, CardSerializer
from .models import User, Card

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class CardView(viewsets.ModelViewSet):
    serializer_class = CardSerializer
    queryset = Card.objects.all()


