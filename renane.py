# 实现对文件夹的文件进行重命名，使用-分割，保存后面的内容
import os


def rename_files(folder_path):
    for file_name in os.listdir(folder_path):
        file_path = os.path.join(folder_path, file_name)
        if os.path.isfile(file_path):
            new_file_name = file_name.split('-')[-1]
            print(new_file_name)
            new_file_path = os.path.join(folder_path, new_file_name)
            os.rename(file_path, new_file_path)


if __name__ == '__main__':
    folder_path = '/Users/hubery/Desktop/Study/matting-website/src/assets/swiper/[IT-XIAOBIN]-compress-output'
    rename_files(folder_path)