from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('registerservice.urls')),
    path('', include('createblog.urls')),
]
