from django.urls import path
from .views import CreateBlogViews,BlogDetailView

urlpatterns = [
    path('api/createblog',CreateBlogViews.as_view(),name='create-blog'),
    path('api/createblog/<int:id>/',BlogDetailView.as_view(), name='create-blog-detail')
]