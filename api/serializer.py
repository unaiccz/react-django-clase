from rest_framework import serializers
from .models import Examen, Apunte
class Examser(serializers.ModelSerializer):
    class Meta:
        model = Examen
        fields = '__all__'
class aPUNTEser(serializers.ModelSerializer):
    class Meta: 
        model = Apunte
        fields = '__all__'