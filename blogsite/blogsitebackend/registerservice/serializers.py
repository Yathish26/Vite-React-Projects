from rest_framework import serializers
from .models import RegisterServiceModel

class RegisterServiceSerializers(serializers.ModelSerializer):
    class Meta:
        model = RegisterServiceModel
        fields = '__all__'