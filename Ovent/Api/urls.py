from django.urls import path, include
from . import views


urlpatterns = [
    path('getproduct', views.get_product, name='Get get door')
]