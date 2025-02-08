from django.shortcuts import render, HttpResponse
from django.template import loader,exceptions
from WebBuilder import page,elements,Reader
from django.views.decorators.clickjacking import xframe_options_exempt
import os
@xframe_options_exempt
def playground(request,name):
    template = loader.get_template('index.html')
    return HttpResponse(template.render({'url':name}))
@xframe_options_exempt
def result(request):
    if request.method == 'POST':
        dd= eval(request.POST.get('code'))
        reader = Reader()
        if dd == []:
            head = elements.head()
            body = elements.body()
        else:
            head = reader.define(dd[0])
            body = reader.define(dd[1])
        try:
            os.chdir('Playground/templates/result')
        except:
            pass
        name = (request.POST.get('name')).split('/')[-1].removesuffix('"')
        html = page(name,head,body)
        html.export()
        return HttpResponse('Created page successfully!')
    else:
        return HttpResponse('Wrong method!')
@xframe_options_exempt
def results(request,get):
    try:
        html = loader.get_template(f'result/{get}.html')
    except exceptions.TemplateDoesNotExist:
        return HttpResponse('<!doctype html><html><head></head><body><body></html>')
    return HttpResponse(html.render())

