from django.urls import path
from . import views

urlpatterns = [
    path('playground/<str:name>', views.playground, name='members'),
    path('playground/result/build',views.result,name='result'),
    path('playground/result',views.results,name='results')
]