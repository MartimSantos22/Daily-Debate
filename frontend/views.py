from django.views.generic import View
from django.http import HttpResponse
import os

class ReactAppView(View):
    def get(self, request):
        try:
            with open(os.path.join(os.path.dirname(__file__), 'build', 'index.html')) as f:
                return HttpResponse(f.read())
        except FileNotFoundError:
            return HttpResponse("React build not found", status=501)
