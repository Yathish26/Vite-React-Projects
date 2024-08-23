from django.urls import path
from .views import RegisterServiceViews

urlpatterns = [
    path('api/registerservice',RegisterServiceViews.as_view(),name='register-service' ),
]