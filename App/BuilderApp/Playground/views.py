from django.shortcuts import render, HttpResponse
from django.template import loader
from WebBuilder import page,elements,Reader
import django.conf.global_settings as settings
import os
global html
def playground(request,name):
    template = loader.get_template('index.html')
    return HttpResponse(template.render())
def result(request):
    global html
    if request.method == 'POST':
        exec(f'code={request.POST.get('code')}')
        head = Reader.define(code[0])
        body = Reader.define(code[1])
        html = page('index',head,body)
def results(request):
    global html
    return HttpResponse(html.render())

