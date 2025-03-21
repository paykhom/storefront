package Update;

use strict;
use warnings;
use LWP::Simple;

sub new {
    my ($class, $commander) = @_;
    my $self = { commander => $commander };
    bless $self, $class;
    return $self;
}

sub execute {
    my ($self) = @_;
    my $dir = $self->{commander}->{current_dir};
    my $url = $self->{commander}->{template_url};
    print "Updating storefront at $dir...\n";
    my $temp_tarball = "/tmp/storefront_latest.tar.gz";

    print "Downloading $url...\n";
    my $status = getstore($url, $temp_tarball);
    unless (is_success($status)) {
        die "Failed to download $url: $status\n";
    }

    print "Extracting update...\n";
    system("tar -xzf $temp_tarball -C $dir --strip-components=1") == 0
        or die "Failed to extract $temp_tarball: $!\n";

    unlink $temp_tarball or warn "Could not delete $temp_tarball: $!\n";
    print "Storefront updated successfully\n";
}

1;