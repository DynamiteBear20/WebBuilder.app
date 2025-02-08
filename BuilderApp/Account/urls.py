from django.urls import path
from . import views
from django.contrib.auth import views as auth_views
urlpatterns = [
    #path('fast',views.fast,name='fastSignIn'),
    #path('',views.signIn,name='signIn'),
    #path('logIn',views.logIn,name='logIn')
    path('login/', auth_views.LoginView.as_view(template_name='login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(template_name='logout.html'), name='logout'),
    path('',views.home,name='home')
]