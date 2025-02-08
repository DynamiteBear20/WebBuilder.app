from django.shortcuts import render,HttpResponse
from django.template import loader

def base(request):
    temp = loader.get_template('landing.html')
    return HttpResponse(temp.render())
def home(request):
    return render(request,'home.html')