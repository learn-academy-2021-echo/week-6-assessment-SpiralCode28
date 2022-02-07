# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# ---Class defined as Blog Post Controller which handles the logic of our application by mapping routes to actions. BPC is inheriting from it's paren class ApplicationController.
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # The instance variable 'posts' is being assigned to the Active record query of BlogPost.all. The AcRec query returns an array of hashes of all the instances of the BlogPost table.
    @posts = BlogPost.all
  end

  def show
    # ---3)
    # Post will be set to a specific blog_post by the id passed as params in the url.
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # A method named new.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # The variable post will create the blog table in the database BlogPost using strong params.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6)
  # Creates the controller method edit - will render the edit form
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # Post will update the instance in the database with the correct :id using strong params if the post is valid it will be rerouted
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      # When the destroy method is unsuccessful, will be rerouted back to the post you want to be deleted.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  # This creates an area for the developer keep things safe from the user and cannot be accessed outside of this class.
  private
  def blog_post_params
    # ---10)
    # A post which calls on these strong params can only edit the fields :title, and :content.
    params.require(:blog_post).permit(:title, :content)
  end
end
