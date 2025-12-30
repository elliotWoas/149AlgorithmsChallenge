def array_conv(input_array):
iteration=1_
 
while len(input_array)>1 :
  next_array[];
    for i in range(0, len(input_array),2):
       if iteration % 2 == 1:
       next_array.append(input_array[i]+input_array[i+1])
       else  :
         next_array.append(input_array[i] * input_array[i + 1])

  
     input_array = next_array
     iteration += 1
 return input_array[0]
