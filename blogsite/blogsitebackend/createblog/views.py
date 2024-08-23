from rest_framework import generics
from .serializers import CreateBlogSerializers
from .models import CreateBlog

class CreateBlogViews(generics.ListCreateAPIView):
    queryset = CreateBlog.objects.all()
    serializer_class = CreateBlogSerializers
    
    
class BlogDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CreateBlog.objects.all()
    serializer_class = CreateBlogSerializers
    lookup_field = 'id'