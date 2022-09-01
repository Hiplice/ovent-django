from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.render_main, name='Test'),
    path('main/', views.render_main, name='Main page'),
    path('special/', views.render_special, name='Special doors'),
]