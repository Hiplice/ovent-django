from django.shortcuts import render, HttpResponse


def render_main(request):
    return render(request, 'index.html')


def render_special(request):
    return render(request, 'spec.html')