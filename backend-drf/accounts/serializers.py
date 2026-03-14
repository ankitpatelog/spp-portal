from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only = True, min_length = 5, style = {'input_type' : 'password'})# write onlt true means passwrod not fetched it onlt writedn from somewhere that is from the user from frontend
    class Meta:
        model = User
        fields = ['username','email','password']
        
    # call create to create the user 
    # the Validated data will be given by the serializer which contains the info form the field by validating it
    def create(self,validated_data):
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password'],
        )
        
        # or we can do it like also
        # user = User.objects.create_user(**validated_data)
        return user