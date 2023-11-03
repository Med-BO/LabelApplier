from rest_framework import serializers
from .models import Label

class DataSerializer(serializers.ModelSerializer):
    class Meta:
        model=Label
        fields=('label_name', 'label_color')