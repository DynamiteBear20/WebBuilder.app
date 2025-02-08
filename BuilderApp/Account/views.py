from django.shortcuts import render, HttpResponse, redirect
from django.template import loader
from django.contrib.auth.decorators import login_required
def fast(request):
    return HttpResponse('Hi')
def signIn(request):
    temp = loader.get_template('signIn.html')
    return HttpResponse(temp.render())
def logIn(request):
    return HttpResponse('Bon')

@login_required
def home(request):
    return redirect('http://127.0.0.1:8000/home')