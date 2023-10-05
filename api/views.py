from rest_framework import viewsets
from .models import Examen
from .serializer import Examser
class Exview(viewsets.ModelViewSet):
    serializer_class = Examser
    queryset = Examen.objects.all()

# Create your views here.
