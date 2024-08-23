
from django.urls import path
from .views import ContactsView

urlpatterns = [
    path('api/contacts',ContactsView.as_view(),name='contacts')
]
