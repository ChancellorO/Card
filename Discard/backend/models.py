from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=20)

class Card(models.Model):
    card_name = models.CharField(max_length=100)
