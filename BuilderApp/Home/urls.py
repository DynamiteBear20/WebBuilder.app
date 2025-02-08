from django.urls import path
from . import views

urlpatterns = [
    path('',views.base,name='face'),
    path('home',views.home,name='home'),
]