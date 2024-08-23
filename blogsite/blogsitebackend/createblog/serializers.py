from rest_framework import serializers
from .models import CreateBlog

class CreateBlogSerializers(serializers.ModelSerializer):
    class Meta:
        model = CreateBlog
        fields = '__all__'