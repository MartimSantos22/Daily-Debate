from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Noticia
from .serializers import NoticiaSerializer
from django.shortcuts import get_object_or_404

# Criar notícia
from rest_framework.parsers import MultiPartParser, FormParser

class CreateNoticiaAPIView(APIView):
    parser_classes = [MultiPartParser, FormParser]  # Aceita multipart/form-data

    def post(self, request):
        serializer = NoticiaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Listar todas as notícias
class ListNoticiasAPIView(APIView):
    def get(self, request):
        noticias = Noticia.objects.exclude(imagem='').order_by('-data_publicacao')
        serializer = NoticiaSerializer(noticias, many=True, context={'request': request})
        return Response(serializer.data)

# Incrementar visualizações
class IncrementViewsAPIView(APIView):
    def post(self, request, pk):
        noticia = get_object_or_404(Noticia, pk=pk)
        noticia.views += 1
        noticia.save()
        return Response({'status': 'view incremented', 'views': noticia.views})

# Incrementar Likes
class IncrementLikesAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, pk):
        noticia = get_object_or_404(Noticia, pk=pk)

        if request.user in noticia.liked_by.all():
            return Response({'detail': 'Você já deu like nesta notícia.'}, status=status.HTTP_400_BAD_REQUEST)

        noticia.likes += 1
        noticia.liked_by.add(request.user)
        noticia.save()
        return Response({'status': 'like incremented', 'likes': noticia.likes})

# Editar uma notícia
class EditNoticiaAPIView(APIView):
    def put(self, request, pk):
        noticia = get_object_or_404(Noticia, pk=pk)
        serializer = NoticiaSerializer(noticia, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Apagar uma notícia
class DeleteNoticiaAPIView(APIView):
    def delete(self, request, pk):
        noticia = get_object_or_404(Noticia, pk=pk)
        noticia.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# Detalhes de uma notícia
class DetailNoticiaAPIView(APIView):
    def get(self, request, pk):
        noticia = get_object_or_404(Noticia, pk=pk)
        serializer = NoticiaSerializer(noticia, context={'request': request})
        return Response(serializer.data)