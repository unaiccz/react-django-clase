from rest_framework import serializers
from .models import Examen
class Examser(serializers.ModelSerializer):
    class Meta:
        model = Examen
        fields = '__all__'