from rest_framework import serializers
from .models import Noticia

class NoticiaSerializer(serializers.ModelSerializer):
    imagem = serializers.ImageField(use_url=True)

    class Meta:
        model = Noticia
        fields = '__all__'

