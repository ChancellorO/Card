from rest_framework import serializers
from .models import User, Card

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')

class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Card
        fields = ('id', 'card_name')