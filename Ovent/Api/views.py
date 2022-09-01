from django.shortcuts import render, HttpResponse
import json
from .models import *


def get_product(request):
    door_id = request.GET.get('id')

    if door_id:
        try:
            db_data = Item.objects.get(id=door_id)
            data = {
                'heading': db_data.heading,
                'description': db_data.description,
                'params': json.loads(db_data.params)['data']
            }

            return HttpResponse(json.dumps(data, ensure_ascii=False).encode('utf8'), content_type="application/json")

        except Item.DoesNotExist:
            return HttpResponse(status=400)
    else:
        return HttpResponse(status=400)


'''def get_image(request):
    door_id = request.GET.get('id')
    params = request.GET.get('params')

    if door_id:

    else:
        return HttpResponse(status=400)'''