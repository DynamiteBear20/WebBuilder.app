from django.urls import path
from . import views

urlpatterns = [
    path('<str:name>', views.playground, name='members'),
    path('result/build',views.result,name='result'),
    path('result/<str:get>',views.results,name='results')
]