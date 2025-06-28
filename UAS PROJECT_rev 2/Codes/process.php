<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $rating = intval($_POST['rating']);
    $comment = htmlspecialchars($_POST['comment']);

    $testimonial = [
        'name' => $name,
        'rating' => $rating,
        'comment' => $comment
    ];

    $testimonials = [];
    if (file_exists('testimonials.json')) {
        $testimonials = json_decode(file_get_contents('testimonials.json'), true);
    }

    $testimonials[] = $testimonial;
    file_put_contents('testimonials.json', json_encode($testimonials));

    // Redirect to testimony page after submission
    header('Location: testimony.html');
    exit();
}
?>
