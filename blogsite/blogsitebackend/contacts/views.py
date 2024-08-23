from django.shortcuts import render
from rest_framework import generics
from .serializers import ContactSerializers
from .models import Contacts

class ContactsView(generics.ListCreateAPIView):
    queryset = Contacts.objects.all()
    serializer_class = ContactSerializers
    