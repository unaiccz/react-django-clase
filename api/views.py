from rest_framework import viewsets
from .models import Examen, Apunte
from .serializer import Examser, aPUNTEser
class Exview(viewsets.ModelViewSet):
    serializer_class = Examser
    queryset = Examen.objects.all()
class Apunteview(viewsets.ModelViewSet):
    serializer_class = aPUNTEser
    queryset = Apunte.objects.all()

# Create your views here.
