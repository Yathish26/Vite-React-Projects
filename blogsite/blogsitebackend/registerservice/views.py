from .models import RegisterServiceModel
from .serializers import RegisterServiceSerializers
from rest_framework import generics

class RegisterServiceViews(generics.ListCreateAPIView):
    queryset = RegisterServiceModel.objects.all()
    serializer_class = RegisterServiceSerializers
